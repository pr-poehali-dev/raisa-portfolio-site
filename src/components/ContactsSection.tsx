import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 bg-mystic-dark">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-exo text-3xl md:text-4xl font-light text-mystic-white mb-6">
            Контакты
          </h2>
          <div className="w-12 h-px bg-mystic-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Свяжитесь со мной удобным способом. Отвечаю в течение часа.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="font-exo text-xl font-medium text-mystic-white mb-6">
              Способы связи
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-mystic-gold/10 flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-mystic-gold" />
                </div>
                <div>
                  <div className="text-mystic-white font-medium">Телефон</div>
                  <div className="text-gray-400 text-sm">+7 (999) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-mystic-gold/10 flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} className="text-mystic-gold" />
                </div>
                <div>
                  <div className="text-mystic-white font-medium">Telegram</div>
                  <div className="text-gray-400 text-sm">@raisa_vorozhea</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-mystic-gold/10 flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-mystic-gold" />
                </div>
                <div>
                  <div className="text-mystic-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">raisa@example.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-mystic-gold/10 flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-mystic-gold" />
                </div>
                <div>
                  <div className="text-mystic-white font-medium">Режим работы</div>
                  <div className="text-gray-400 text-sm">Ежедневно с 10:00 до 22:00</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-mystic-gray/20">
              <h4 className="text-mystic-gold font-medium mb-4">Важная информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Первая консультация 30 минут — бесплатно</li>
                <li>• Полная конфиденциальность гарантирована</li>
                <li>• Работаю только с совершеннолетними</li>
                <li>• Оплата после получения результата</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-exo text-xl font-medium text-mystic-white mb-6">
              Записаться на консультацию
            </h3>
            
            <form className="space-y-6">
              <Input 
                placeholder="Ваше имя" 
                className="bg-mystic-gray/20 border-mystic-gray/30 text-mystic-white placeholder:text-gray-500 focus:border-mystic-gold"
              />
              <Input 
                placeholder="Телефон или Telegram" 
                className="bg-mystic-gray/20 border-mystic-gray/30 text-mystic-white placeholder:text-gray-500 focus:border-mystic-gold"
              />
              <Textarea 
                placeholder="Опишите вашу ситуацию (необязательно)" 
                rows={4}
                className="bg-mystic-gray/20 border-mystic-gray/30 text-mystic-white placeholder:text-gray-500 focus:border-mystic-gold resize-none"
              />
              
              <Button className="w-full bg-mystic-gold hover:bg-mystic-accent text-mystic-black py-3 font-medium transition-all duration-300">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;