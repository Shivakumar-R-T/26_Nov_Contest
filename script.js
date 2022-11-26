
/*Using .then();  

//   function Getdata(){
//     const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

//     fetch(api)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((result)=>{
//        let tableData="";

       
//         result.map((ans)=>{
//             let price=ans.current_price;
//             let finPrice=new Intl.NumberFormat("en-US",{
//                 style:"currency",
//                 currency:"USD"
//             }).format(price)
//             let vol=ans.total_volume;

//             let finVol=new Intl.NumberFormat("en-US",{
//                 style:"currency",
//                 currency:"USD"
//             }).format(vol);

          
//             let marCap=ans.market_cap;
//             let finMark=new Intl.NumberFormat("en-US",{
//                 style:"currency",
//                 currency:"USD"
//             }).format(marCap);


//         tableData +=`<tr style="Border-bottom:2px solid white">
//           <td style="width:30px"><img src="${ans.image}"> <td>
//           <td> ${ans.name}</td>
//           <td>${(ans.symbol).toUpperCase()}</td>
//           <td>${finPrice}</td>
//           <td>${finVol}</td>
//           <td>${parseFloat(ans.market_cap_change_percentage_24h).toFixed(2)}%</td>
//           <td>Mkt Cap: ${finMark}</td> 
//         </tr>`;

//         })
       
//         document.querySelector('tbody').innerHTML=tableData;
//         let col=document.querySelectorAll('td');
//         let n=col.length;

//         //changing color to red if market_cap_change_percentage_24h is < 0
        
//         let i=6;
//         while(i<n)
//         {
//             let val=col[i].innerText;
//             console.log(val);
//             if(val.charAt(0)=='-'){
//                 col[i].style.color="red";
//             }

//             i=i+8;
//         }
        
//         console.log(row[0].td[1]);

//      })


    

// }
// Getdata();




/*                      Using async ,await                   */


async function Getdata(){
    const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    const res=await fetch(api);

    const data=res.json();

 
    return data
    
}


async function getOutPut()
{
   
    const result=await Getdata();
    let tableData="";

       
        result.map((ans)=>{
            let price=ans.current_price;
            let finPrice=new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(price)
            let vol=ans.total_volume;

            let finVol=new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(vol);

          
            let marCap=ans.market_cap;
            let finMark=new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(marCap);


        tableData +=`<tr style="Border-bottom:2px solid white">
          <td style="width:30px"><img src="${ans.image}"> <td>
          <td> ${ans.name}</td>
          <td>${(ans.symbol).toUpperCase()}</td>
          <td>${finPrice}</td>
          <td>${finVol}</td>
          <td>${parseFloat(ans.market_cap_change_percentage_24h).toFixed(2)}%</td>
          <td>Mkt Cap: ${finMark}</td> 
        </tr>`;

        })
       
        document.querySelector('tbody').innerHTML=tableData;

        let col=document.querySelectorAll('td');
        let n=col.length;

        //changing color to red if market_cap_change_percentage_24h is < 0
        
        let i=6;
        while(i<n)
        {
            let val=col[i].innerText;
            console.log(val);
            if(val.charAt(0)=='-'){
                col[i].style.color="red";
            }

            i=i+8;
        }
       
  
    
}
getOutPut();



  