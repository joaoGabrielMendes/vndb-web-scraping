import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/header/Header"
import Vninfo from "../../components/VnInfo/VnInfo"
import { CircularProgress, Center, grid } from "@chakra-ui/react"
import { useRouter } from "next/router"

export async function getStaticPaths() {

    const allPaths = [1]

    const paths = allPaths.map((iten, index) => {
        return {
            params: {
                vn: allPaths[index].toString()
            }
        }
    })


    return {paths, fallback: true}
}

export const getStaticProps = async (context) => {

    const id = context.params.vn

    const res = await fetch(`http://localhost:3001/vn/${id}`)
    const data = await res.json()

    return {
        props: {
            vn: data
        }
    }

}

export default function Home({ vn }) {

    const router = useRouter()

    if(router.isFallback){
        return(
            <Center w='100vw' h='100vh'>
                <CircularProgress isIndeterminate color='blue.300' />
            </Center>
        )
    }

    console.log(vn.cover.isNSFW)
    return(
        <>
        <Header/>
        <Navbar />
        <Vninfo 
            title={vn.title}
            titleJpn={vn.titleJpn}
            cover={vn.cover.img}
            isNsfw={vn.cover.isNSFW}
            description={vn.description}
            screenshots = {vn.screenshots}
            />
        </>
    )
}