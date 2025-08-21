const Footer = () => {
  return (
    <footer className="py-16 border-t border-mystic-gray/20 bg-mystic-black">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="font-exo text-xl font-light text-mystic-white">
              Раиса Ильинская
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Потомственная ворожея в 7-м поколении. Помогаю обрести любовь и семейное счастье уже более 15 лет.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-mystic-white font-medium">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Привлечение суженого</li>
              <li>Возвращение в семью</li>
              <li>Защитные ритуалы</li>
              <li>Укрепление брака</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-mystic-white font-medium">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div>+7 (999) 123-45-67</div>
              <div>@raisa_vorozhea</div>
              <div>raisa@example.com</div>
              <div>Ежедневно с 10:00 до 22:00</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-mystic-gray/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2024 Раиса Ильинская. Все права защищены.
            </div>
            <div className="text-gray-600 text-xs">
              Помогаю обрести любовь и семейное счастье • Работаю только с позитивными энергиями
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;