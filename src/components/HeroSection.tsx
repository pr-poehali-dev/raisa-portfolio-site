import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 min-h-screen flex items-center relative bg-mystic-black">
      <div className="container mx-auto px-8 relative z-10 max-w-4xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-2 bg-mystic-gold/10 rounded-full text-sm text-mystic-gold border border-mystic-gold/20">
              <Icon name="Star" size={16} className="mr-2" />
              Потомственная ворожея в 7-м поколении
            </div>
            <h1 className="font-exo text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-mystic-white">
              Раиса Ильинская
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Помогаю обрести любовь и гармонию в отношениях. Работаю с древними практиками для создания прочных союзов.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-mystic-gold hover:bg-mystic-accent text-mystic-black px-8 py-4 rounded-lg text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button variant="ghost" className="text-mystic-white hover:bg-mystic-dark border border-mystic-gray px-8 py-4 rounded-lg text-base font-medium transition-all duration-300">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-mystic-gray/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-mystic-gold font-exo">15+</div>
              <div className="text-sm text-gray-500 mt-1">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-mystic-gold font-exo">500+</div>
              <div className="text-sm text-gray-500 mt-1">счастливых пар</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-mystic-gold font-exo">24/7</div>
              <div className="text-sm text-gray-500 mt-1">поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-mystic-gold font-exo">98%</div>
              <div className="text-sm text-gray-500 mt-1">результат</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;