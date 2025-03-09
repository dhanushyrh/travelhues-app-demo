import { AddNewCard } from "./AddNewCard";
import { StoryCard } from "./StoryCard";

export const StoryGrid: React.FC = () => {
    const sampleCards = [
      {
        title: "This is a title",
        subtitle: "Yes and here goes my subtitle",
        image: "https://source.unsplash.com/200x150/?mountains",
      },
      {
        title: "This is a title",
        subtitle: "Yes and here goes my subtitle",
        image: "https://source.unsplash.com/200x150/?nature",
      },
      {
        title: "This is a title",
        subtitle: "Yes and here goes my subtitle",
        image: "https://source.unsplash.com/200x150/?landscape",
      },
    ];
  
    return (
      <div className="flex gap-4 mt-6">
        {sampleCards.map((card, index) => (
          <StoryCard key={index} {...card} />
        ))}
        <AddNewCard />
      </div>
    );
  };
  