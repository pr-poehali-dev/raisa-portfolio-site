import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Консультация", desc: "Обсуждаем вашу ситуацию и выбираем подходящий метод работы" },
    { num: "02", title: "Диагностика", desc: "Провожу энергетический анализ и определяю препятствия" },
    { num: "03", title: "Подготовка", desc: "Готовлю все необходимые атрибуты и выбираю благоприятное время" },
    { num: "04", title: "Проведение ритуала", desc: "Выполняю магическую работу с соблюдением всех традиций" },
    { num: "05", title: "Отслеживание", desc: "Контролирую процесс и при необходимости корректирую энергии" },
    { num: "06", title: "Результат", desc: "Получаете желаемый результат и рекомендации на будущее" }
  ];

  return (
    <section id="process" className="py-20 bg-mystic-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="Clock" size={16} className="mr-2" />
            Как проходит работа
          </div>
          <h2 className="font-exo text-4xl lg:text-5xl font-bold mb-4">
            Процесс <span className="text-mystic-purple">работы</span>
          </h2>
          <p className="text-xl text-gray-300">Пошаговый алгоритм достижения результата</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/img/0c69b914-b01d-4103-8369-83fcb30d42c1.jpg"
              alt="Магический ритуал"
              className="rounded-2xl shadow-2xl w-full border border-mystic-purple/20"
            />
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center text-mystic-purple font-bold border border-mystic-purple/30">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-exo text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;