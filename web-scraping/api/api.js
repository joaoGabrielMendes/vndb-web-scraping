const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

class Api {

    baseUrl = 'https://vndb.org/';

    getDbLength = async () => {

        const url = `${this.baseUrl}`
        
        try{
        const content = await fetchData(url)
        const $ = cheerio.load(content)

        let max = $('#menulist>div:nth-child(4)>div>dl>dd:nth-child(2)').text()

        return max
        }catch(err){
            return err
        }
    }

    getVisualNovelById = async (id) => {

        const gameId = id
        const url = `${this.baseUrl}v${id}`

        try {
        const content = await fetchData(url)
        const $ = cheerio.load(content)

        let title = $('#maincontent>div:nth-child(2)>h1').text()
        let titleJpn = $('.alttitle').text()
        let description = $('tr.nostripe>td>p').text()
        let cover = $('.imghover--visible>img').attr('src')
        function isNSFW(){
            let isporn= $('b.standout').text()
            if (isporn.replace(/[» '']/g, '') == ''){
                return false
            }
            return true
        }
        let tags = []
        $('#vntags>span>a').each((i, e) => {
            tags.push($(e).text())
        })

        let screenshots = []
        $('.scr>a').each((i, e) => {
            screenshots.push($(e).attr('href'))
        })

        const data = {
            id: id,
            title: title,
            titleJpn: titleJpn,
            description: description,
            cover: {
                img: cover,
                isNSFW: isNSFW()
            },
            screenshots: screenshots,
            tags: tags
        }

        return data
    }catch(err){
        return{
            error: err
        }
    }
    }

    getVnImage = async (id) => {
        const url = `${this.baseUrl}v${id}`
        try{
        const content = await fetchData(url)
        const $ = cheerio.load(content)

        let cover = $('.imghover--visible>img').attr('src')
        function isNSFW(){
            let isporn= $('b.standout').text()
            if (isporn.replace(/[» '']/g, '') == ''){
                return false
            }
            return true
        }

        return {
            cover: cover,
            isNSFW: isNSFW()
        }
        }catch(err){
            return err
        }
    }

    getVns = async (category) => {

        const url = `${this.baseUrl}${category}`

        try{
        const content = await fetchData(url)
        const $ = cheerio.load(content)

        const rating = []
         $('.tc_rating').each((i, e) => {
            rating.push($(e).text().slice(0, 4))
        })

        const popularity = []
        $('.tc_pop').each((i, e) => {
            popularity.push($(e).text())
        })

        const vn = []
        $('.tc_title>').each(async (i, e) => {
            const data = {
                title: $(e).text(),
                id: $(e).attr('href').replace(/[^0-9]/g,''),
                rating: rating[i - 1],
                popularity: popularity[i - 1]
            }
            vn.push(data)
        })

        return vn.slice(2)
        }catch(err){
            return{
                err
            }
        }
    }
    
}

module.exports = Api;
