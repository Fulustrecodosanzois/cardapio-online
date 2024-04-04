import { Card } from "./ui/card";

const Footer = () => {
    return (
        <Card className="bg-primary px-8 py-5 text-[10px] opacity-75 lg:text-sm flex justify-center rounded-none">
            <span className="ml-2 text-white">&copy; 2024 Todos os direitos reservados.</span>
        </Card>
    );
};

export default Footer;

// import { Copyright } from 'lucide-react';

// const Footer = () => {
//     return (
//         <div className="bg-primary px-8 py-5 text-[10px] opacity-75 lg:text-sm">
//             <div className="mx-auto lg:container flex justify-center">
//                 <Copyright 
//                     className='text-white' 
//                     size="15" 
//                 />
//                 <span className="ml-2 text-white font-semibold"> 2024 Todos os direitos reservados.</span>
//             </div>
//         </div>
//     );
// } 

// export default Footer;



                