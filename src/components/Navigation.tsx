import Icon from "@/components/ui/icon";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-mystic-dark/80 backdrop-blur-sm border-b border-mystic-purple/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-exo text-2xl font-bold text-mystic-purple flex items-center">
              <Icon name="Sparkles" size={24} className="mr-2" />
              Раиса Ильинская
            </div>
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-mystic-purple transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-mystic-purple transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-mystic-purple transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-mystic-purple transition-colors">Как проходит</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-mystic-purple transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-mystic-purple transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-mystic-purple transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-mystic-dark/90 backdrop-blur-sm border-b border-mystic-purple/20">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center py-3 border-b border-mystic-purple/10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-accent mb-2 flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </div>
          <div className="text-center">
            <div className="font-exo font-bold text-mystic-purple text-sm">Раиса Ильинская</div>
            <div className="font-exo text-xs text-gray-400">Ворожея</div>
          </div>
        </div>
        
        {/* Navigation Icons */}
        <div className="flex justify-around items-center px-4 py-3">
          <button 
            onClick={() => scrollToSection('about')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-purple transition-colors"
          >
            <Icon name="User" size={20} />
            <span className="text-xs mt-1">Кто я</span>
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-purple transition-colors"
          >
            <Icon name="Sparkles" size={20} />
            <span className="text-xs mt-1">Обряды</span>
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-purple transition-colors"
          >
            <Icon name="Heart" size={20} />
            <span className="text-xs mt-1">Отзывы</span>
          </button>
          <button 
            onClick={() => scrollToSection('contacts')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-purple transition-colors"
          >
            <Icon name="MessageCircle" size={20} />
            <span className="text-xs mt-1">Связь</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;