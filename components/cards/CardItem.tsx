export const CardItem = ({ cards, onSkip }: any) => {
  console.log(cards.count);
  const nextCardHandler = () => {
    if (onSkip < cards.count) {
      onSkip++;
    } else onSkip = 0;
    console.log(onSkip);
  };

  const prevCardHandler = () => {
    if (onSkip !== 0) {
      onSkip--;
    } else onSkip = cards.count;
    console.log(onSkip);
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="card mt-20">
        <div className="card__side card__side--front">
          {cards.cards[0].name}
        </div>
        <div className="card__side card__side--back">
          {cards.cards[0].description}
        </div>
      </div>
      <div className="flex items-center justify-between space-x-24 mt-6">
        <div
          onClick={prevCardHandler}
          className="rounded-md text-xl cursor-pointer bg-greyLight p-3 px-10 py-2 text-black hover:bg-brightRed hover:text-white "
        >
          prev
        </div>
        <div
          onClick={nextCardHandler}
          className="rounded-md text-xl bg-greyLight cursor-pointer p-3 px-10 py-2 text-black hover:bg-brightRed hover:text-white"
        >
          next
        </div>
      </div>
    </div>
  );
};
