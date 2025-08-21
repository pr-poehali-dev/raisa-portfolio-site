import Icon from "@/components/ui/icon";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-mystic-black/95 backdrop-blur-sm border-b border-mystic-gray/10">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="font-exo text-xl font-light text-mystic-white">
              Раиса Ильинская
            </div>
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Процесс</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm text-gray-400 hover:text-mystic-gold transition-colors font-light">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-mystic-black/95 backdrop-blur-sm border-b border-mystic-gray/10">
        {/* Avatar and Name */}
        <div className="flex items-center py-4 px-6 border-b border-mystic-gray/10">
          <div className="w-10 h-10 rounded-full bg-mystic-gold/20 mr-3 flex items-center justify-center border border-mystic-gold/30">
            <Icon name="Star" size={16} className="text-mystic-gold" />
          </div>
          <div>
            <div className="font-exo font-light text-mystic-white text-sm">Раиса Ильинская</div>
            <div className="font-exo text-xs text-gray-500">Ворожея</div>
          </div>
        </div>
        
        {/* Navigation Icons */}
        <div className="flex justify-around items-center px-4 py-4">
          <button 
            onClick={() => scrollToSection('about')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-gold transition-colors"
          >
            <Icon name="User" size={18} className="text-gray-400" />
            <span className="text-xs mt-1 text-gray-400 font-light">Кто я</span>
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-gold transition-colors"
          >
            <Icon name="Star" size={18} className="text-gray-400" />
            <span className="text-xs mt-1 text-gray-400 font-light">Обряды</span>
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-gold transition-colors"
          >
            <Icon name="Heart" size={18} className="text-gray-400" />
            <span className="text-xs mt-1 text-gray-400 font-light">Отзывы</span>
          </button>
          <button 
            onClick={() => scrollToSection('contacts')} 
            className="flex flex-col items-center min-w-fit px-3 py-2 hover:text-mystic-gold transition-colors"
          >
            <Icon name="MessageCircle" size={18} className="text-gray-400" />
            <span className="text-xs mt-1 text-gray-400 font-light">Связь</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;