import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="Phone" size={16} className="mr-2" />
            Свяжитесь со мной
          </div>
          <h2 className="font-exo text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-mystic-purple">Контакты</span>
          </h2>
          <p className="text-xl text-gray-300">Свяжитесь со мной для консультации</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 bg-mystic-dark/40 rounded-xl border border-mystic-purple/20">
                <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-mystic-purple" />
                </div>
                <div>
                  <div className="font-semibold text-white">Телефон</div>
                  <div className="text-gray-300 text-lg">+7 (999) 123-45-67</div>
                  <div className="text-gray-400 text-sm">Звонки и SMS</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-mystic-dark/40 rounded-xl border border-mystic-purple/20">
                <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-mystic-purple" />
                </div>
                <div>
                  <div className="font-semibold text-white">Telegram</div>
                  <div className="text-gray-300 text-lg">@raisa_vorozhea</div>
                  <div className="text-gray-400 text-sm">Быстрые ответы 24/7</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-mystic-dark/40 rounded-xl border border-mystic-purple/20">
                <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-mystic-purple" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-300 text-lg">raisa@example.com</div>
                  <div className="text-gray-400 text-sm">Подробные консультации</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-mystic-dark/40 rounded-xl border border-mystic-purple/20">
                <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-mystic-purple" />
                </div>
                <div>
                  <div className="font-semibold text-white">Часы работы</div>
                  <div className="text-gray-300 text-lg">Ежедневно с 10:00 до 22:00</div>
                  <div className="text-gray-400 text-sm">Экстренные случаи - круглосуточно</div>
                </div>
              </div>

              <div className="p-6 bg-mystic-purple/10 rounded-xl border border-mystic-purple/30">
                <h3 className="font-exo text-xl font-bold text-mystic-purple mb-3">Важная информация</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Первая консультация — бесплатно (15 минут)</li>
                  <li>• Конфиденциальность гарантирована</li>
                  <li>• Работаю только после 18 лет</li>
                  <li>• Оплата после получения результата</li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-mystic-dark/80 border-mystic-purple/20">
              <CardContent className="p-8">
                <h3 className="font-exo text-2xl font-bold mb-6 text-white text-center">
                  Записаться на консультацию
                </h3>
                <div className="space-y-4">
                  <Button className="w-full bg-mystic-purple hover:bg-mystic-accent text-white py-4 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                  <Button variant="outline" className="w-full border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white py-4 text-lg rounded-full transition-all hover:scale-105">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                  <Button variant="outline" className="w-full border-mystic-accent text-mystic-accent hover:bg-mystic-accent hover:text-white py-4 text-lg rounded-full transition-all hover:scale-105">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Отправить Email
                  </Button>
                </div>
                <div className="mt-8 p-4 bg-mystic-purple/5 rounded-lg border border-mystic-purple/20">
                  <div className="text-center text-mystic-purple font-bold mb-2">🎁 Специальное предложение</div>
                  <div className="text-center text-sm text-gray-400">
                    При заказе любого ритуала до конца месяца — защитный амулет в подарок!
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;