import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const FAQSection = () => {
  const faqs = [
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
  ];

  return (
    <section id="faq" className="py-20 bg-mystic-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-mystic-purple/10 rounded-full text-sm text-mystic-purple mb-4">
            <Icon name="HelpCircle" size={16} className="mr-2" />
            Часто задаваемые вопросы
          </div>
          <h2 className="font-exo text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-mystic-purple">FAQ</span>
          </h2>
          <p className="text-xl text-gray-300">Ответы на популярные вопросы</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
  );
};

export default FAQSection;