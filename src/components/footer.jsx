import { Copyright } from 'lucide-react';
import { Card } from "./ui/card";


const Footer = () => {
    return (
        <Card className="bg-primary p-[60px] rounded-none">
            <div className="flex justify-center items-center">
                <Copyright size="20" />
                <span className="ml-2">&copy; 2024 Todos os direitos reservados.</span>
            </div>
        </Card>
    );
}

export default Footer;