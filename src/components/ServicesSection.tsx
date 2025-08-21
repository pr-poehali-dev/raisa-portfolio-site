import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    { icon: "Heart", title: "Приворот на любовь", desc: "Привлечение конкретного человека", price: "от 5000 ₽" },
    { icon: "Users", title: "Приворот на верность", desc: "Укрепление существующих отношений", price: "от 4000 ₽" },
    { icon: "Home", title: "Приворот на возврат", desc: "Возвращение ушедшего партнера", price: "от 6000 ₽" },
    { icon: "Ring", title: "Приворот на брак", desc: "Склонение к предложению руки и сердца", price: "от 7000 ₽" },
    { icon: "Eye", title: "Диагностика отношений", desc: "Определение проблем в паре", price: "от 1500 ₽" },
    { icon: "Shield", title: "Снятие соперницы", desc: "Устранение любовниц и разлучниц", price: "от 4500 ₽" },
    { icon: "Sparkles", title: "Чистка ауры", desc: "Очищение от негатива и порчи", price: "от 3000 ₽" },
    { icon: "Star", title: "Защитные амулеты", desc: "Создание оберегов для любви", price: "от 2000 ₽" },
    { icon: "Moon", title: "Ритуалы по лунным фазам", desc: "Работа с энергией Луны", price: "от 3500 ₽" }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Полный спектр магических услуг
          </div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
            Мои <span className="text-mystic-purple">услуги</span>
          </h2>
          <p className="text-xl text-gray-300">Помогаю решить любые вопросы сердца и судьбы</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-mystic-dark/60 border-mystic-purple/30 hover:bg-mystic-dark/80 transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name={service.icon as any} size={24} className="text-mystic-purple" />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-lg font-bold text-white">{service.title}</h3>
                    <div className="text-mystic-purple font-semibold text-sm">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;