import React from "react";

function Card() {

  
const Data = [
  {
    image:
      "https://imgs.search.brave.com/F9NXTZPwgOfrARWdoRCvq7OEcJKv1IdrJow-v6n17R0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE4VW9WeWxxeUwu/anBn",
    name: "tv",
    desc: "tv dncjnedckje",
    stock:false,
  },
  {
    image:
      "https://imgs.search.brave.com/9woGjUYAd7e2anIWBW5d7XS24WlVnL1SdVSStN_cfH0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/MTUwMzc0L3Bob3Rv/L3JlbW90ZS1jb250/cm9scy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cmtCbFVz/bTY4STgzMDhiLWFB/SUpUaE95S2o1Umxv/eklPaUUtY0JaX3Bz/OD0",
    name: "remote",
    desc: "tv remote line",
    stock:true
  },
  {
    image:
      "https://imgs.search.brave.com/6R3CYDebJPbI-wGMylBgRpiOrpyxxeSaY3NHjrLrxMA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlzY3Byb2ZpbGUu/Y29tL21lZGlhL0dy/YXBoaWNzL0RpU0Mt/Y2lyY2xlLTQzMF8y/LnBuZw",
    name: "disc",
    desc: "this line is   the disc",
    stock:false,
  },
  {
    image:
      "https://imgs.search.brave.com/463DTwKAsFjCbeKrCBhYFsbMkgn-t0-He_hhj0sQ724/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kL01U/RTItMT90cz0xNzIx/OTA2MzEyNTI2JiRw/bmd0cmFuc3BhcmVu/dCQmZm10PXBuZy1h/bHBoYSZxbHQ9ODUs/MCZyZXNNb2RlPXNo/YXJwMiZvcF91c209/MS43NSwwLjMsMiww/JmRwcj1vZmY.jpeg",
    name: "mobile",
    desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, est!",
    stock:false,

  },
  
];
 function click(e) {
   return console.log("hogya bas kar bc");
   
 }

  return (
      <div className="h-screen w-full px-10 flex items-center gap-10 justify-between">
      {Data.map((val,index)=>(
        <div key={index} className="h-80 w-56 bg-zinc-700 overflow-hidden  text-white rounded-md">
            
          <div className="h-1/2 bg-white mb-2 ">
            <img 
              className="h-full w-full object-cover"
              src={val.image}
              alt=""
            />
          </div>
          <h2 className="font-bold px-2 text-xl mb-4">{val.name}</h2>
          <p className="px-2">{val.desc}
          </p>
          <button onClick={click} className= {`${val.stock ? 'bg-green-600' : 'bg-red-600'} mx-2 px-4 py-2`}>
            {val.stock ? "stocked" : "unstocked"}
            </button>
        </div>
      ))}
      </div>
  );
}

export default Card;
