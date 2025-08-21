import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-dark via-mystic-dark/90 to-black text-white relative overflow-x-hidden">
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-mystic-purple/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-mystic-accent/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-mystic-purple/25 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-mystic-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-80 left-20 w-1 h-1 bg-mystic-purple/35 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-mystic-dark/80 backdrop-blur-sm border-b border-mystic-purple/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-cormorant text-2xl font-bold text-mystic-purple flex items-center">
              <Icon name="Sparkles" size={24} className="mr-2" />
              Раиса Ильинская
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-mystic-purple transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-mystic-purple transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-mystic-purple transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-mystic-purple transition-colors">Как проходит</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-mystic-purple transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-mystic-purple transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-mystic-purple transition-colors">Контакты</button>
            </div>
            <Button className="md:hidden bg-mystic-purple hover:bg-mystic-accent text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-mystic-purple/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/20 rounded-full text-sm text-mystic-purple border border-mystic-purple/30">
                <Icon name="Star" size={16} className="mr-2" />
                Потомственная ворожея в 7-м поколении
              </div>
              <h1 className="font-cormorant text-5xl lg:text-7xl font-bold leading-tight">
                Ворожея 
                <span className="text-mystic-purple block">Раиса Ильинская</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Помогаю обрести любовь и гармонию в отношениях. 
                Более 15 лет практики в области привлечения суженого и укрепления семейных уз.
                Работаю только с белой магией для обоюдного счастья.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-mystic-purple hover:bg-mystic-accent text-white px-8 py-3 rounded-full text-lg shadow-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Записаться на сеанс
                </Button>
                <Button variant="outline" className="border-mystic-purple text-mystic-purple hover:bg-mystic-purple hover:text-white px-8 py-3 rounded-full text-lg">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-purple font-cormorant">15+</div>
                  <div className="text-sm text-gray-400">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-purple font-cormorant">500+</div>
                  <div className="text-sm text-gray-400">счастливых пар</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-purple font-cormorant">24/7</div>
                  <div className="text-sm text-gray-400">поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-mystic-purple font-cormorant">98%</div>
                  <div className="text-sm text-gray-400">результат</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src="/img/0501ab76-4611-4460-b071-19ce5dedc548.jpg"
                  alt="Раиса Ильинская - Ворожея"
                  className="rounded-2xl shadow-2xl w-full border border-mystic-purple/20"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-mystic-purple/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-mystic-accent/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-mystic-purple/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-mystic-dark/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/5 via-transparent to-mystic-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
              <Icon name="User" size={16} className="mr-2" />
              Познакомьтесь со мной ближе
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              Обо <span className="text-mystic-purple">мне</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Моя миссия — помочь каждому обрести истинную любовь и семейное счастье через древние знания и современный подход
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
                <h3 className="font-cormorant text-2xl font-bold mb-3 text-mystic-purple">Наследие предков</h3>
                <p className="text-gray-300">
                  Родилась в семье потомственных знахарок. Знания передавались из поколения в поколение уже более 200 лет. 
                  С детства изучала травничество, обрядовую магию и древние практики.
                </p>
              </div>
              <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
                <h3 className="font-cormorant text-2xl font-bold mb-3 text-mystic-purple">Образование и практика</h3>
                <p className="text-gray-300">
                  Окончила курсы парапсихологии, изучала Таро у мастеров в Праге, практиковала рунические практики в Скандинавии.
                  Постоянно совершенствую знания и изучаю новые методики.
                </p>
              </div>
              <div className="bg-mystic-dark/60 p-6 rounded-xl border border-mystic-purple/20">
                <h3 className="font-cormorant text-2xl font-bold mb-3 text-mystic-purple">Философия работы</h3>
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
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Привороты</h3>
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
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Гадания</h3>
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
                <h3 className="font-cormorant text-2xl font-bold mb-4 text-white">Защита</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Снятие негатива, порчи и сглаза. Создание защитных амулетов для сохранения любви и семейного очага.
                </p>
                <div className="text-mystic-purple font-semibold">от 2500 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Истории успеха
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              Отзывы <span className="text-mystic-purple">клиентов</span>
            </h2>
            <p className="text-xl text-gray-300">Истории тех, кто обрел счастье</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                age: "28 лет",
                text: "Раиса помогла мне вернуть любимого человека. Через месяц после обряда мы снова были вместе, а сейчас планируем свадьбу! Невероятно благодарна за чуткость и профессионализм.",
                stars: 5,
                service: "Приворот на возврат"
              },
              {
                name: "Михаил С.",
                age: "35 лет", 
                text: "Долго сомневался, но решился. Результат превзошел все ожидания - встретил свою вторую половинку уже через 3 недели. Теперь мы счастливы вместе уже полгода!",
                stars: 5,
                service: "Приворот на любовь"
              },
              {
                name: "Елена М.",
                age: "42 года",
                text: "Благодарна Раисе за помощь в семейных делах. Муж стал более внимательным, в доме воцарилась гармония и любовь. Дети заметили перемены к лучшему.",
                stars: 5,
                service: "Приворот на верность"
              },
              {
                name: "Дмитрий А.",
                age: "29 лет",
                text: "Обратился по поводу соперника. Раиса деликатно решила ситуацию без вреда для всех сторон. Девушка сама сделала выбор в мою пользу. Рекомендую!",
                stars: 5,
                service: "Снятие соперника"
              },
              {
                name: "Ольга Р.",
                age: "31 год",
                text: "Прекрасный специалист! Помогла не только с личной жизнью, но и дала ценные советы по карьере. Чувствую себя защищенной и уверенной.",
                stars: 5,
                service: "Комплексная работа"
              },
              {
                name: "Александр В.",
                age: "38 лет",
                text: "Скептически относился к магии, но результат налицо. Жена вернулась домой, отношения стали лучше, чем были. Спасибо за профессионализм!",
                stars: 5,
                service: "Восстановление семьи"
              }
            ].map((review, index) => (
              <Card key={index} className="bg-mystic-dark/60 border-mystic-purple/30 hover:bg-mystic-dark/80 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.stars)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-mystic-purple bg-mystic-purple/10 px-2 py-1 rounded">
                      {review.service}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic text-sm">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{review.name}</div>
                      <div className="text-gray-400 text-xs">{review.age}</div>
                    </div>
                    <Icon name="Quote" size={20} className="text-mystic-purple/30" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            {[
              { icon: "Heart", title: "Приворот на любовь", desc: "Привлечение конкретного человека", price: "от 5000 ₽" },
              { icon: "Users", title: "Приворот на верность", desc: "Укрепление существующих отношений", price: "от 4000 ₽" },
              { icon: "Home", title: "Приворот на возврат", desc: "Возвращение ушедшего партнера", price: "от 6000 ₽" },
              { icon: "Ring", title: "Приворот на брак", desc: "Склонение к предложению руки и сердца", price: "от 7000 ₽" },
              { icon: "Eye", title: "Диагностика отношений", desc: "Определение проблем в паре", price: "от 1500 ₽" },
              { icon: "Shield", title: "Снятие соперницы", desc: "Устранение любовниц и разлучниц", price: "от 4500 ₽" },
              { icon: "Sparkles", title: "Чистка ауры", desc: "Очищение от негатива и порчи", price: "от 3000 ₽" },
              { icon: "Star", title: "Защитные амулеты", desc: "Создание оберегов для любви", price: "от 2000 ₽" },
              { icon: "Moon", title: "Ритуалы по лунным фазам", desc: "Работа с энергией Луны", price: "от 3500 ₽" }
            ].map((service, index) => (
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-mystic-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
              <Icon name="Clock" size={16} className="mr-2" />
              Как проходит работа
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
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
              {[
                { num: "01", title: "Консультация", desc: "Обсуждаем вашу ситуацию и выбираем подходящий метод работы" },
                { num: "02", title: "Диагностика", desc: "Провожу энергетический анализ и определяю препятствия" },
                { num: "03", title: "Подготовка", desc: "Готовлю все необходимые атрибуты и выбираю благоприятное время" },
                { num: "04", title: "Проведение ритуала", desc: "Выполняю магическую работу с соблюдением всех традиций" },
                { num: "05", title: "Отслеживание", desc: "Контролирую процесс и при необходимости корректирую энергии" },
                { num: "06", title: "Результат", desc: "Получаете желаемый результат и рекомендации на будущее" }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mystic-purple/20 rounded-full flex items-center justify-center text-mystic-purple font-bold border border-mystic-purple/30">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-mystic-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Часто задаваемые вопросы
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-mystic-purple">FAQ</span>
            </h2>
            <p className="text-xl text-gray-300">Ответы на популярные вопросы</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Безопасны ли ваши методы работы?",
                  a: "Да, абсолютно безопасны. Я работаю только с белой магией и позитивными энергиями. Никогда не использую методы, которые могут навредить вам или другим людям. Все ритуалы направлены на гармонизацию и привлечение любви."
                },
                {
                  q: "Сколько времени занимает получение результата?",
                  a: "Результаты могут проявиться от 3 дней до 3 месяцев, в зависимости от сложности ситуации. В среднем первые положительные изменения заметны через 2-3 недели. Я всегда предупреждаю о примерных сроках на консультации."
                },
                {
                  q: "Нужно ли мне присутствовать при проведении ритуала?",
                  a: "Нет, ваше физическое присутствие не обязательно. Работа проводится на энергетическом уровне. Главное - ваше искреннее желание изменить ситуацию и вера в положительный результат."
                },
                {
                  q: "Можете ли вы помочь, если человек находится далеко?",
                  a: "Расстояние не имеет значения для энергетической работы. Главное - иметь фотографию человека и его полные данные (ФИО, дата рождения). Работала с клиентами из разных стран мира."
                },
                {
                  q: "Что нужно для начала работы?",
                  a: "Для начала достаточно связаться со мной для консультации. Расскажете о ситуации, я проведу диагностику и предложу оптимальный план действий. Никакой предоплаты на консультации не требую."
                },
                {
                  q: "Гарантируете ли вы результат?",
                  a: "Я гарантирую максимальные усилия и профессиональный подход. Результативность составляет около 98%, но многое зависит от конкретной ситуации. Если результата нет, возвращаю часть оплаты."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-mystic-dark/60 border border-mystic-purple/30 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-mystic-purple text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-mystic-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
              <Icon name="Phone" size={16} className="mr-2" />
              Свяжитесь со мной
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold mb-4">
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
                  <h3 className="font-cormorant text-xl font-bold text-mystic-purple mb-3">Важная информация</h3>
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
                  <h3 className="font-cormorant text-2xl font-bold mb-6 text-white text-center">
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;