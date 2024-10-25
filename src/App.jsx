import Container from "./components/Container"
import Flex from "./components/Flex"
import Image from "./components/Image"
import Model from "./assets/imgbanner.png"
import Model2 from "./assets/points good.png"
import shopimg1 from "./assets/shopimg1.png"
import shopimg2 from "./assets/shopimg2.png"
import counter from "./assets/points good (2).png"
import picture from "./assets/picture.png"
import collection1 from "./assets/collection1.png"
import collection2 from "./assets/collection2.png"
import collection3 from "./assets/collection3.png"
import logo from '../src/assets/logo (2).png'
import Menu from "./components/Menu"
import Button from "./components/Button"
import Heading from "./components/Heading"
import { FaStar } from "react-icons/fa";




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
            <Flex className={'justify-center gap-x-6'}>
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
       <div className="py-60">
        <Container>
          <Heading as="h3" text={"New Collection"} className={"text-center text-[64px] font-pop font-bold pb-20"}/>
          <Flex className={'justify-between'}>
           <div className="w-[350px] rounded-lg relative">
               <Image imgSrc={collection1}/>
               <Button btnName={"Sweater"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
           <div className="w-[350px] rounded-lg relative">
               <Image imgSrc={collection2}/>
               <Button btnName={"Jeans"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
           <div className="w-[350px] rounded-lg relative h-[402px]">
               <Image imgSrc={collection3} className={"h-full"}/>
               <Button btnName={"Baskets"} className={'bg-white rounded-2xl py-2 px-20 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
           </div>
          </Flex>
        </Container>

       </div>
       {/* collection part End */}

       {/* counter part start */}
       <div className="py-6 relative">
        <Container>
          <Flex>
            <div className="w-1/2">
            <Image imgSrc={picture} className={'w-full'}/>
            
            </div>
            <div className="w-1/2 pl-24 pt-4">
            <Heading as={'h1'} text={"Best Fashion Since 2010"} className={"text-[64px] font-bold font-pop pr-28"}/>
            <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.  "} className={"text-[22px] font-pop leading-9 py-5text-[24px] font-semibold"}/>
           
            </div>
            </Flex>
            <div className="w-[780px] bg-counterBg rounded-lg p-16 text-center absolute bottom-[-150px] right-[900px] -z-10">
              <Flex className={"justify-between"}>
                <div className="w-1/3 border-r-2 border-black">
                <Heading as={"h3"} text={"2010"} className={"font-bold text-[64px]"}/>
                <Heading as={"h4"} text={"Founded"} className={"font-pop text-[28px]"}/>
                </div>
                <div className="w-1/3  border-r-2  border-black mx-[10px]">
                <Heading as={"h3"} text={"5000+"} className={"font-bold text-[64px] mx-[10px]"}/>
                <Heading as={"h4"} text={"Product Sold"}  className={"font-pop text-[28px]"}/>
                </div>
                <div className="w-1/3 mx-[10px]">
                <Heading as={"h3"} text={"4500+"} className={"font-bold text-[64px]"}/>
                <Heading as={"h4"} text={"Best Reviews"}  className={"font-pop text-[28px]"}/>
                </div>

              </Flex>
            </div>
            
        </Container>

      </div>
       
      {/* counter part ENd */}
      {/* shop part start */}
      <div className="bg-shopBg pb-[191px] pt-[36px] mt-[230px]">
        <Container>
          <Flex className={'gap-x-12'}>
            <div className="w-1/3">
            <Heading as={'h1'} text={"Best Seller Product"} className={"text-[64px] font-bold font-Frank pr-6rem text-white"}/>
             <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus. "} className={"text-[24px] font-Frank leading-9  py-5 text-white"}/>
              <Button btnName={'Learn MORE'} className={'bg-black text-white py-5 px-14 rounded-lg uppercase'}/>

            </div>
          <div className="">
          <Image imgSrc={shopimg1}/>
          <div className="py-15 text-4xl gap-x-5 bg-white">
            <Flex className={'pt-4'}>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            </Flex>
            <Heading as={'h3'} text={'Sweater Shirt'} className={'text-[22px] font-pop font-semiBold py-[15px]'}></Heading>
            <div>
              <Flex className={'gap-x-5'}>
                <Heading as={'p'} text={'$45.99'} className={'text-[24px] font-pop font-[400] text-[#C4C4C4]'}></Heading>
                <Heading as={'p'} text={'$35.99'} className={'text-[24px] font-pop font-[400] text-[#000000]'}></Heading>
              </Flex>
            </div>



           

          </div>

          </div>
          <div className="">
          <Image imgSrc={shopimg2}/>
          <div className="py-15 text-4xl gap-x-5 bg-white">
            <Flex className={'pt-4'}>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            <FaStar className="text-iconcolor"/>
            </Flex>
            <Heading as={'h3'} text={'Pants fashion'} className={'text-[22px] font-pop font-semiBold py-[15px]'}></Heading>
            <div>
              <Flex className={'gap-x-6'}>
                <Heading as={'p'} text={'$55'} className={'text-[24px] font-pop font-[400] text-[#C4C4C4]'}></Heading>
                <Heading as={'p'} text={'$44.99'} className={'text-[24px] font-pop font-[400] text-[#000000]'}></Heading>
              </Flex>
            </div>



           

          </div>

          </div>
            
          </Flex>
        </Container>
      </div>


      
      
    </>
  )
}

export default App

