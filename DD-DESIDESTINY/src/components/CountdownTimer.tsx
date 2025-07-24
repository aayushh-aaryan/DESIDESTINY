import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 1 month from now
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 1);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <div className="text-center">
        <div className="bg-gradient-brand rounded-xl p-4 md:p-6 shadow-brand animate-bounce-in">
          <div className="text-2xl md:text-4xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/80 mt-1">DAYS</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gradient-brand rounded-xl p-4 md:p-6 shadow-brand animate-bounce-in" style={{animationDelay: '0.2s'}}>
          <div className="text-2xl md:text-4xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/80 mt-1">HOURS</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gradient-brand rounded-xl p-4 md:p-6 shadow-brand animate-bounce-in" style={{animationDelay: '0.4s'}}>
          <div className="text-2xl md:text-4xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/80 mt-1">MINS</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gradient-brand rounded-xl p-4 md:p-6 shadow-brand animate-bounce-in" style={{animationDelay: '0.6s'}}>
          <div className="text-2xl md:text-4xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/80 mt-1">SECS</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;