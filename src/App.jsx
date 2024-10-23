import Container from "./components/Container"
import Flex from "./components/Flex"
import Image from "./components/Image"
import Model from "./assets/model.png"
import picture from "./assets/picture.png"
import collection1 from "./assets/collection1.png"
import collection2 from "./assets/collection2.png"
import collection3 from "./assets/collection3.png"
import logo from '../src/assets/logo (2).png'
import Menu from "./components/Menu"
import Button from "./components/Button"
import Heading from "./components/Heading"




function App() {
  

  return (
    <>
      <div className="bg-headerBg py-4">
      <Container>
        <Flex className={'items-center'}>
          <div className="w-[10%]">
            <Image imgSrc={logo}/>
          </div>
          <div className="w-[60%] pt-4">
            <ul>
            <Flex className={'justify-center gap-x-4'}>
             <Menu menuName='Men'/> 
             <Menu menuName='Women'/>
             <Menu menuName='Kids'/> 
             <Menu menuName='Collection'/> 
             <Menu menuName='Trends'/> 
            </Flex>
            </ul>
          </div>
          <div className="w-[30%]">
            <Button btnName={"Login"} className={'py-[15px] px-[30px] mr-2 border border-btnBdr hover:bg-btnHover hover:rounded-xl'}/>
            <Button btnName={"SignUp"} className={'py-[15px] px-[30px] border border-btnBdr hover:bg-btnHover hover:rounded-xl'}/>
          </div>
        </Flex>
      </Container>

      </div>

       {/* Header part End */}
       {/* Banner part start */}
       <div className="bg-headerBg py-[115px]">
        <Container>
          <Flex>
            <div className="w-1/2">
             <Heading as={'h1'} text={"Find The Best Fashion Style For You"} className={"text-[64px] font-bold font-pop pr-28"}/>
             <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={"text-[22px] font-pop leading-9 pr-40 py-5"}/>
              <Button btnName={'Shop Now'} className={'bg-black text-white py-5 px-14 rounded-lg uppercase'}/>
            </div>
            <div className="w-1/2">
            <Image imgSrc={Model}/>
            </div>
          </Flex>
        </Container>
       </div>
       {/* Banner part End */}
       {/* collection part start */}
       <div className="py-96">
        <Container>
          <Heading as="h3" text={"New Collection"} className={"text-center text-[30px] font-pop font-bold pb-20"}/>
          <Flex className={'justify-between'}>
           <div className="w-[350px] rounded-lg relative">
               <Image imgSrc={collection1}/>
               <Button btnName={"Sweater"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
           <div className="w-[350px] rounded-lg relative">
               <Image imgSrc={collection2}/>
               <Button btnName={"Jeans"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
           <div className="w-[350px] rounded-lg relative">
               <Image imgSrc={collection3}/>
               <Button btnName={"Baskets"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
          </Flex>
        </Container>

       </div>
       {/* collection part End */}
       {/* counter part start */}
      <div className="py-6 ">
        <Container>
          <Flex>
            <div className="w-1/2">
            <Image imgSrc={picture} />
            </div>
            <div className="w-1/2 pl-24">
            <Heading as={'h1'} text={"Best Fashion Since 2010"} className={"text-[64px] font-bold font-pop pr-28"}/>
            <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.  "} className={"text-[22px] font-pop leading-9 py-5"}/>
           
            </div>
          </Flex>
          <div className="w-[450px] bg-red-400 rounded-lg p-14 text- absolute -bottom-[25px] right-[0pxx] -z-10">
            <Flex className={"justify-between"}>
              <div className="w-1/3 border-r-2 border-black">
              <Heading as={"h3"} text={"2010"}/>
              <Heading as={"h4"} text={"Founded"}/>
              </div>
              <div className="w-1/3 border-r-2 border-black ">
              <Heading as={"h3"} text={"5000+"}/>
              <Heading as={"h4"} text={"Product Sold"}/>
              </div>
              <div className="w-1/3">
              <Heading as={"h3"} text={"4500+"}/>
              <Heading as={"h4"} text={"Best Reviews"}/>
              </div>
            </Flex>
          </div>
        </Container>

      </div>
      {/* counter part ENd */}
      {/* shop part start */}


      
      
    </>
  )
}

export default App
