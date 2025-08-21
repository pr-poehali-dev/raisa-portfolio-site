const Footer = () => {
  return (
    <footer className="py-12 border-t border-mystic-purple/20 bg-mystic-dark/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-cormorant text-2xl font-bold text-mystic-purple mb-4">
              Раиса Ильинская
            </div>
            <p className="text-gray-400 text-sm">
              Потомственная ворожея в 7-м поколении. Помогаю обрести любовь и семейное счастье уже более 15 лет.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Привороты и любовная магия</li>
              <li>Гадания и предсказания</li>
              <li>Снятие порчи и сглаза</li>
              <li>Защитные ритуалы</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>+7 (999) 123-45-67</div>
              <div>@raisa_vorozhea</div>
              <div>raisa@example.com</div>
              <div>Ежедневно с 10:00 до 22:00</div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-mystic-purple/10">
          <div className="text-gray-400 text-sm">
            &copy; 2024 Раиса Ильинская. Все права защищены.
          </div>
          <div className="text-gray-500 text-xs mt-2">
            Помогаю обрести любовь и семейное счастье • Работаю только с позитивными энергиями
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;