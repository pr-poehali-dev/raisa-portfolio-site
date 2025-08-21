const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-mystic-dark">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-exo text-3xl md:text-4xl font-light text-mystic-white mb-6">
            Обо мне
          </h2>
          <div className="w-12 h-px bg-mystic-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed font-light">
              Меня зовут Раиса Ильинская. Я потомственная ворожея в седьмом поколении. 
              Моя семья хранит древние знания о любовной магии более двухсот лет.
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              За 15 лет практики я помогла более 500 парам обрести счастье и гармонию. 
              Работаю исключительно с белой магией, создавая энергии любви и взаимопонимания.
            </p>
            <p className="text-gray-400 leading-relaxed font-light">
              Верю, что настоящая любовь должна приносить радость обеим сторонам. 
              Мои ритуалы направлены на пробуждение искренних чувств, а не принуждение.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border border-mystic-gray/20 p-6 rounded-lg">
              <h3 className="font-exo text-lg font-medium text-mystic-gold mb-3">
                Специализация
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Привлечение суженого</li>
                <li>• Возвращение любимого человека</li>
                <li>• Укрепление семейных уз</li>
                <li>• Защита от разлучниц</li>
              </ul>
            </div>

            <div className="border border-mystic-gray/20 p-6 rounded-lg">
              <h3 className="font-exo text-lg font-medium text-mystic-gold mb-3">
                Принципы работы
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Только белая магия</li>
                <li>• Безопасность для всех участников</li>
                <li>• Полная конфиденциальность</li>
                <li>• Индивидуальный подход</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;