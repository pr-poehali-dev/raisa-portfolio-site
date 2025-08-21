import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-dark via-mystic-dark/90 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-mystic-dark/80 backdrop-blur-sm border-b border-mystic-purple/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-cormorant text-2xl font-bold text-mystic-purple">
              Раиса Ильинская
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-mystic-purple transition-colors">Главная</a>
              <a href="#about" className="hover:text-mystic-purple transition-colors">Обо мне</a>
              <a href="#reviews" className="hover:text-mystic-purple transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-mystic-purple transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-cormorant text-5xl lg:text-7xl font-bold leading-tight">
                Ворожея 
                <span className="text-mystic-purple block">Раиса Ильинская</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Помогаю обрести любовь и гармонию в отношениях. 
                Более 15 лет практики в области привлечения суженого и укрепления семейных уз.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-mystic-purple hover:bg-mystic-accent text-white px-8 py-3 rounded-full text-lg">
                  Записаться на сеанс
                </Button>
                <Button variant="outline" className="border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white px-8 py-3 rounded-full text-lg">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mystic-purple">15+</div>
                  <div className="text-sm text-gray-400">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mystic-purple">500+</div>
                  <div className="text-sm text-gray-400">счастливых пар</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-mystic-purple">24/7</div>
                  <div className="text-sm text-gray-400">поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src="/img/0501ab76-4611-4460-b071-19ce5dedc548.jpg"
                  alt="Раиса Ильинская - Ворожея"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-mystic-purple/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mystic-accent/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-mystic-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              Обо <span className="text-mystic-purple">мне</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Моя миссия — помочь каждому обрести истинную любовь и семейное счастье
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-mystic-dark/80 border-mystic-purple/20 hover:bg-mystic-dark/90 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-mystic-purple" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Привороты</h3>
                <p className="text-gray-300 leading-relaxed">
                  Профессиональные обряды привлечения любви. Работаю только с чистыми намерениями для обоюдного счастья.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-mystic-dark/80 border-mystic-purple/20 hover:bg-mystic-dark/90 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Eye" size={32} className="text-mystic-purple" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Гадания</h3>
                <p className="text-gray-300 leading-relaxed">
                  Предсказания судьбы на картах Таро, рунах и кристальном шаре. Узнайте свое будущее в любви.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-mystic-dark/80 border-mystic-purple/20 hover:bg-mystic-dark/90 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-mystic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" size={32} className="text-mystic-purple" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Защита</h3>
                <p className="text-gray-300 leading-relaxed">
                  Снятие негатива, порчи и сглаза. Создание защитных амулетов для сохранения любви и семейного очага.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              Отзывы <span className="text-mystic-purple">клиентов</span>
            </h2>
            <p className="text-xl text-gray-300">Истории тех, кто обрел счастье</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                text: "Раиса помогла мне вернуть любимого человека. Через месяц после обряда мы снова были вместе, а сейчас планируем свадьбу!",
                stars: 5
              },
              {
                name: "Михаил С.",
                text: "Долго сомневался, но решился. Результат превзошел все ожидания - встретил свою вторую половинку уже через 3 недели.",
                stars: 5
              },
              {
                name: "Елена М.",
                text: "Благодарна Раисе за помощь в семейных делах. Муж стал более внимательным, в доме воцарилась гармония и любовь.",
                stars: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-mystic-dark/60 border-mystic-purple/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                  <div className="text-mystic-purple font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-mystic-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-mystic-purple">Контакты</span>
            </h2>
            <p className="text-xl text-gray-300">Свяжитесь со мной для консультации</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-mystic-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Телефон</div>
                    <div className="text-gray-300">+7 (999) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-mystic-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-gray-300">@raisa_vorozhea</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-mystic-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">raisa@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-mystic-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Часы работы</div>
                    <div className="text-gray-300">Ежедневно с 10:00 до 22:00</div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-mystic-dark/80 border-mystic-purple/20">
                <CardContent className="p-8">
                  <h3 className="font-cormorant text-2xl font-bold mb-6 text-white text-center">
                    Записаться на консультацию
                  </h3>
                  <div className="space-y-6">
                    <Button className="w-full bg-mystic-purple hover:bg-mystic-accent text-white py-4 text-lg rounded-full">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить сейчас
                    </Button>
                    <Button variant="outline" className="w-full border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white py-4 text-lg rounded-full">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в Telegram
                    </Button>
                  </div>
                  <div className="mt-6 text-center text-sm text-gray-400">
                    Первая консультация — бесплатно
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-mystic-purple/20">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Раиса Ильинская. Все права защищены.</p>
            <p className="text-sm mt-2">Помогаю обрести любовь и семейное счастье</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;