import { APIResponse } from "./constants";
import React from "react";

const [quotes, setQuotes] = React.useState<APIResponse[]>([]);

const getData = async (categoryName: string) => {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${categoryName}`, {
        headers: {
            "X-Api-Key": process.env.API_SECRET_KEY!
        }
    })
    const data = await res.json();

    setQuotes(data);
};

React.useEffect(() => {
    getData("money");
}, []);

// const [quotes, setQuotes] = useState<APIResponse[]>([]);

// const getData = async (categoryName: string) => {
//   const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${categoryName}`, {
//     headers: {
//       "X-Api-Key": "E5zm0CuywI+fySCHTRHLlA==9Wy9u9xRcdCBZMUM"
//     }
//   })
//   const data = await res.json();

//   setQuotes(data);
// };

// useEffect(() => {
//   getData("death");
// }, []);



// import CalendarComponent from "@/components/main/CalendarComponent";
// import SelectCategory from "@/components/main/SelectCategory";
// import { APIResponse } from "@/constants";

// async function getData(categoryName: string) {
//     const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${categoryName}`, {
//         headers: {
//             "X-Api-Key": process.env.API_SECRET_KEY!
//         },
//     });

//     return res.json();
// }

// export default async function Home() {

//     const quotes = await getData("age");

//     return (
//         <div className= "flex gap-6 flex-col md:flex-row px-3" >

//         <CalendarComponent />

//         < SelectCategory />

//         <div>
//         {
//             quotes?.map((quote: APIResponse) => (
//                 <div key= { quote.quote } >
//                 <h1>{ quote.quote } < /h1>
//                 < h1 > { quote.author } < /h1>
//                 < /div>
//           ))
// }
// </div>
//     < /div>
//   )
// }