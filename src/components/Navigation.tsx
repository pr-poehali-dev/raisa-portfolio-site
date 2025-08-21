import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-mystic-dark/80 backdrop-blur-sm border-b border-mystic-purple/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-cormorant text-2xl font-bold text-mystic-purple flex items-center">
            <Icon name="Sparkles" size={24} className="mr-2" />
            Раиса Ильинская
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-mystic-purple transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-mystic-purple transition-colors">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-mystic-purple transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-mystic-purple transition-colors">Как проходит</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-mystic-purple transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-mystic-purple transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-mystic-purple transition-colors">Контакты</button>
          </div>
          <Button className="md:hidden bg-mystic-purple hover:bg-mystic-accent text-white">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;