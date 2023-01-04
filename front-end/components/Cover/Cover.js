import {Center, Image} from "@chakra-ui/react";

export default function Cover({show, coverVerify}) {

    return (
        <Center>
            <Image onClick={show}
                src={coverVerify}/>
        </Center>
    )
}
