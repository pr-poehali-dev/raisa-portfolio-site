import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Heart",
      title: "Привлечение суженого",
      description: "Создание энергетического канала для встречи с истинной любовью",
      price: "от 15 000 ₽"
    },
    {
      icon: "Users",
      title: "Возвращение в семью", 
      description: "Восстановление утраченной связи и гармонии в отношениях",
      price: "от 20 000 ₽"
    },
    {
      icon: "Shield",
      title: "Защитные ритуалы",
      description: "Оберег от негативного воздействия и сохранение союза",
      price: "от 10 000 ₽"
    },
    {
      icon: "Star",
      title: "Укрепление брака",
      description: "Усиление взаимной любви и преданности между супругами",
      price: "от 12 000 ₽"
    },
    {
      icon: "Eye",
      title: "Диагностика отношений",
      description: "Глубокий анализ энергетических связей и блоков",
      price: "от 5 000 ₽"
    },
    {
      icon: "Flame",
      title: "Усиление страсти",
      description: "Пробуждение угасших чувств и возвращение романтики",
      price: "от 8 000 ₽"
    }
  ];

  return (
    <section id="services" className="py-24 bg-mystic-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-exo text-3xl md:text-4xl font-light text-mystic-white mb-6">
            Услуги
          </h2>
          <div className="w-12 h-px bg-mystic-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Индивидуальный подход к каждой ситуации с использованием проверенных временем практик
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-mystic-gray/20 rounded-lg p-8 hover:border-mystic-gold/30 transition-all duration-300 bg-mystic-dark/50"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-mystic-gold/10 flex items-center justify-center mb-4 group-hover:bg-mystic-gold/20 transition-colors">
                  <Icon name={service.icon as any} size={24} className="text-mystic-gold" />
                </div>
                <h3 className="font-exo text-lg font-medium text-mystic-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="pt-4 border-t border-mystic-gray/10">
                <div className="flex items-center justify-between">
                  <span className="text-mystic-gold font-medium">{service.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-gray-500 group-hover:text-mystic-gold transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 border border-mystic-gray/20 rounded-lg bg-mystic-dark/30">
          <h3 className="font-exo text-xl font-medium text-mystic-white mb-4">
            Индивидуальная консультация
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto font-light">
            Каждая ситуация уникальна. Запишитесь на персональную консультацию 
            для обсуждения вашего случая и выбора оптимального решения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-lg font-medium text-mystic-gold">30 минут</div>
              <div className="text-sm text-gray-500">Бесплатно</div>
            </div>
            <div className="hidden sm:block w-px bg-mystic-gray/20"></div>
            <div className="text-center">
              <div className="text-lg font-medium text-mystic-gold">60 минут</div>
              <div className="text-sm text-gray-500">3 000 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;