import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-mystic-dark/50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/5 via-transparent to-mystic-accent/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="User" size={16} className="mr-2" />
            Познакомьтесь со мной ближе
          </div>
          <h2 className="font-exo text-4xl lg:text-5xl font-bold mb-4">
            Обо <span className="text-mystic-purple">мне</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Моя миссия — помочь каждому обрести истинную любовь и семейное счастье через древние знания и современный подход
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
              <h3 className="font-exo text-2xl font-bold mb-3 text-mystic-purple">Наследие предков</h3>
              <p className="text-gray-300">
                Родилась в семье потомственных знахарок. Знания передавались из поколения в поколение уже более 200 лет. 
                С детства изучала травничество, обрядовую магию и древние практики.
              </p>
            </div>
            <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
              <h3 className="font-exo text-2xl font-bold mb-3 text-mystic-purple">Образование и практика</h3>
              <p className="text-gray-300">
                Окончила курсы парапсихологии, изучала Таро у мастеров в Праге, практиковала рунические практики в Скандинавии.
                Постоянно совершенствую знания и изучаю новые методики.
              </p>
            </div>
            <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
              <h3 className="font-exo text-2xl font-bold mb-3 text-mystic-purple">Философия работы</h3>
              <p className="text-gray-300">
                Работаю только с позитивными энергиями. Верю, что истинная любовь должна приносить радость обеим сторонам.
                Никогда не делаю того, что может навредить людям.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/0d836b33-2f5b-477e-a0ff-f817866b88e0.jpg"
              alt="Магические инструменты"
              className="rounded-2xl shadow-2xl w-full border border-mystic-purple/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark/60 to-transparent rounded-2xl"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-mystic-dark/80 border-mystic-purple/30 hover:bg-mystic-dark/90 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-mystic-purple" />
              </div>
              <h3 className="font-exo text-2xl font-bold mb-4 text-white">Привороты</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Профессиональные обряды привлечения любви. Работаю только с чистыми намерениями для обоюдного счастья.
              </p>
              <div className="text-mystic-purple font-semibold">от 3000 ₽</div>
            </CardContent>
          </Card>
          
          <Card className="bg-mystic-dark/80 border-mystic-purple/30 hover:bg-mystic-dark/90 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Eye" size={32} className="text-mystic-purple" />
              </div>
              <h3 className="font-exo text-2xl font-bold mb-4 text-white">Гадания</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Предсказания судьбы на картах Таро, рунах и кристальном шаре. Узнайте свое будущее в любви.
              </p>
              <div className="text-mystic-purple font-semibold">от 2000 ₽</div>
            </CardContent>
          </Card>
          
          <Card className="bg-mystic-dark/80 border-mystic-purple/30 hover:bg-mystic-dark/90 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-mystic-purple" />
              </div>
              <h3 className="font-exo text-2xl font-bold mb-4 text-white">Защита</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Снятие негатива, порчи и сглаза. Создание защитных амулетов для сохранения любви и семейного очага.
              </p>
              <div className="text-mystic-purple font-semibold">от 2500 ₽</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;