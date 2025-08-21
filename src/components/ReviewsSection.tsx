import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
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
  ];

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Истории успеха
          </div>
          <h2 className="font-exo text-4xl lg:text-5xl font-bold mb-4">
            Отзывы <span className="text-mystic-purple">клиентов</span>
          </h2>
          <p className="text-xl text-gray-300">Истории тех, кто обрел счастье</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
  );
};

export default ReviewsSection;