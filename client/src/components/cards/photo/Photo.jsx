import React from 'react';

export default function Photo({ image }) {
  if (image) {
    image = `${process.env.REACT_APP_HOST}/img/${image}`;
  }
  return (
    <div
      style={{
        marginTop: '20px',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        backgroundImage: `url(${image || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX////h4eGZmZnf39/j4+Pm5ub09PT7+/vs7Ozo6Oj4+Pjw8PCWlpaTk5OamprY2Nimpqa/v7/Pz8+srKyioqLHx8e+vr63t7fU1NQ98dxgAAAEVklEQVR4nO2dW3eqMBCFrQlXAyLWev7/Lz1EpPWC0FDYE8P+HvrQtXBlM5OZSchlsyGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBXkjzepVmk9Ydq0DrK0l2cJ9LNmokkTq20ZxqhafzuKht1WvWI+0HpN1aZxFmf6XqMmb2lyCT9nbyryDSXbrAj8Yhz9rhrFks32oE8cpR3NeS7aIwjV/t92/EtNObZRHktmff9cfcnfZadtIRBYpf4+QrtsRn/bsCWVFrIC5JpEbSPyMsKYBYP7fAxqM7loR3eBZx0ag58hfKsM/4tCfaTSYu6IVlCYCPRm3gzYxC9x5uQuowFLZ446nICPZGYLijQi/JmN3eauEeJ58V4UX0W4eommbNU60fLBtSl8sQtkaTAZaNMh2BXzCECJbvi8p2wRUsJnHvA9BohP0X5qEVm6mbJau0Rkept+Vx/i0SwQYWZFoGkGC9bjz6i8D0Ra0IBI2J7oQXdE5GBtAWc9nNsL7Qo7BgDU3LfAx3uA4aFz0AHivg4Y0HGGnycsQBLNxEnhbqpjJMi3VQiklpw0VTGSYFJP8Gn+xZY0pfqhriOKNUNcR0RMQ3cD2gIJZQNLaCMiJxje1SIGenLBRpUqMFNBD+DmRqWC6WoYDo2sNC6d/PBOL94EDO8GE4W+qM+HNQUiXp/OtQjGjHpYrANWh23xpQnd4n6VBqzPQ6/HExlOtyEL7NtKPeuErUq7YPm7IHCwYZGF4Fb42xEfWifLAc7gYIoHBxZREWr8DBVYeG9wqptaO2ssG5fTeW7Ql2XjURznBBpjvbBcvjVeKCwkVgV5fk+Iuooih4b/vQ/rb5MUY3YHqNwxDyXpt+3fV8V1UNw7fmf7nsRjz/ug8JnbN80n3dm1erTjPU5OYXOzbrEV3NrscaCZjRu9v4URKHzhHcbX81n3dadzZ/604zHzT4wdanz2EL/K9tkfj6ppqup0/Ga3P85OzxmbOE+PuwkGlNYzFWgc85EjQ8njPF165a3WKd1/yHMGD+f0DK9PxZ3Aoujc21uwczTTJpra6JLte3saLbVadIoGfX1aeIuX1Wfq9J2w+pcTxoi45acTJ2ouRQt0VPJ4wBqzjv87xbhf3sK//vhCr4Bh/8dP/y1GOGvp1nBmqjw17WFvzZRIumjV3rj3RS90Dv8dd7wJSf43V3gld5KYNMM1ogSG/TC3/cU/t61Few/DH8P6Qr2AcOCjeDxZhg/FT39A+GnomcqrOBcjPDPNlnB+TQrOGNo2RLci3OilpToicAVnNe2lER/ztzbhH9u4mYFZ1+u4PzSFZxBO2uNKl2LvmSu8sZDD+2YslzqCT899JvQz2TfrOBc/c2Uuy06VOS3g/4wMXFE72C/Dvc7Lt7jbotbcsd7ZnzNgEOEflfQhcDve7pyubOr13Qh3NnV8X3vmgrx3jVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgiS/8cMRAmf+3K8AAAAAElFTkSuQmCC'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 100px',
        backgroundPosition: 'center',

      }}
    />
  );
}
