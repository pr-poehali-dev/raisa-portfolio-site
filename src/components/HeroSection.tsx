import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-radial from-mystic-purple/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/20 rounded-full text-sm text-mystic-purple border border-mystic-purple/30">
              <Icon name="Star" size={16} className="mr-2" />
              Потомственная ворожея в 7-м поколении
            </div>
            <h1 className="font-exo text-5xl lg:text-7xl font-bold leading-tight">
              Ворожея 
              <span className="text-mystic-purple block">Раиса Ильинская</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Помогаю обрести любовь и гармонию в отношениях. 
              Более 15 лет практики в области привлечения суженого и укрепления семейных уз.
              Работаю только с белой магией для обоюдного счастья.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-mystic-purple hover:bg-mystic-accent text-white px-8 py-3 rounded-full text-lg shadow-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на сеанс
              </Button>
              <Button variant="outline" className="border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white px-8 py-3 rounded-full text-lg">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-mystic-purple font-exo">15+</div>
                <div className="text-sm text-gray-400">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystic-purple font-exo">500+</div>
                <div className="text-sm text-gray-400">счастливых пар</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystic-purple font-exo">24/7</div>
                <div className="text-sm text-gray-400">поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mystic-purple font-exo">98%</div>
                <div className="text-sm text-gray-400">результат</div>
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="/img/0501ab76-4611-4460-b071-19ce5dedc548.jpg"
                alt="Раиса Ильинская - Ворожея"
                className="rounded-2xl shadow-2xl w-full border border-mystic-purple/20"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-mystic-purple/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mystic-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-mystic-purple/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;