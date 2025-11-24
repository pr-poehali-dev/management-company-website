import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={28} className="text-primary" />
              <span className="text-xl font-bold text-secondary">УК Комфорт</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('residents')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'residents' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Потребители
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Контакты
              </button>
            </div>

            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-muted to-background">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
                Управляющая компания<br />
                <span className="text-primary">полного цикла</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональное управление жилыми и коммерческими объектами. 
                Надёжность, прозрачность, качество.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-base">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-base">
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Надёжность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    15+ лет опыта на рынке управления недвижимостью
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Eye" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Прозрачность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Полная отчётность и открытая финансовая информация
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Качество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Высокие стандарты обслуживания и оперативная работа
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center text-secondary">О компании</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  УК «Комфорт» — это современная управляющая компания, специализирующаяся на комплексном 
                  обслуживании жилых и коммерческих объектов. Мы работаем на рынке более 15 лет и за это 
                  время заслужили доверие тысяч жильцов и собственников.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Наша миссия — создавать комфортные и безопасные условия проживания, обеспечивая высокое 
                  качество обслуживания и прозрачность всех процессов управления.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Target" size={24} className="text-primary" />
                      <CardTitle>Наши цели</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Обеспечение бесперебойной работы инженерных систем</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Поддержание чистоты и порядка на территории</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Оперативное реагирование на обращения жильцов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle2" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Эффективное управление финансами дома</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Users" size={24} className="text-primary" />
                      <CardTitle>Наша команда</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <Icon name="Briefcase" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Опытные менеджеры по работе с объектами</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Briefcase" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Квалифицированные инженеры и техники</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Briefcase" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Аттестованные специалисты по безопасности</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Briefcase" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>Круглосуточная диспетчерская служба</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted rounded-lg p-8 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Обслуживаемых домов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Довольных жильцов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Диспетчерская служба</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="residents" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Потребители</h2>
              
              <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                Мы предоставляем полный спектр услуг для жильцов и собственников недвижимости
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Home" size={24} className="text-primary" />
                      <CardTitle>Для жильцов</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="Wrench" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Аварийная служба</div>
                        <p className="text-sm text-muted-foreground">Круглосуточное устранение аварий и неисправностей</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="MessageSquare" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Приём обращений</div>
                        <p className="text-sm text-muted-foreground">Онлайн-форма и личный приём по графику</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="FileText" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Справки и документы</div>
                        <p className="text-sm text-muted-foreground">Выдача необходимых справок и копий документов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="Building" size={24} className="text-primary" />
                      <CardTitle>Для собственников</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="Calculator" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Финансовая отчётность</div>
                        <p className="text-sm text-muted-foreground">Прозрачные отчёты о расходах и начислениях</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="ClipboardCheck" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Общие собрания</div>
                        <p className="text-sm text-muted-foreground">Организация и проведение собраний собственников</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="TrendingUp" size={18} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Планы развития</div>
                        <p className="text-sm text-muted-foreground">Долгосрочные планы по улучшению объектов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl">Личный кабинет жильца</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Управляйте коммунальными услугами онлайн
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-start space-x-3">
                      <Icon name="Receipt" size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Оплата услуг</div>
                        <p className="text-sm opacity-90">Онлайн-оплата без комиссии</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="BarChart3" size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Показания счётчиков</div>
                        <p className="text-sm opacity-90">Передача показаний в 2 клика</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Bell" size={20} className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Уведомления</div>
                        <p className="text-sm opacity-90">Важные новости и объявления</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full md:w-auto">
                    Войти в личный кабинет
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Контакты</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Свяжитесь с нами</CardTitle>
                      <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Телефон</div>
                          <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                          <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Диспетчерская</div>
                          <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                          <p className="text-sm text-muted-foreground">Круглосуточно</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Email</div>
                          <p className="text-muted-foreground">info@uk-komfort.ru</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">Адрес офиса</div>
                          <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Оставьте заявку</CardTitle>
                      <CardDescription>И мы свяжемся с вами в ближайшее время</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Input
                            type="tel"
                            placeholder="Телефон"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Ваше сообщение"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          <Icon name="Send" size={18} className="mr-2" />
                          Отправить заявку
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Icon name="Building2" size={24} />
                <span className="text-lg font-bold">УК Комфорт</span>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm opacity-80">© 2024 УК Комфорт. Все права защищены.</p>
                <p className="text-xs opacity-60 mt-1">Профессиональное управление недвижимостью</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
