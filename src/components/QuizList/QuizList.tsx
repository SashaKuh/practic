import { QuizCard } from "../QuizCard/QuizCard"
import { List, ListItem } from "./QuizList.style";

interface QuizItem{
        id: string;
        topic: string;
        level: string;
        time: number;
        questions: number;
}

interface QuizListProps{
        items: QuizItem[]
}

export const QuizList: React.FC<QuizListProps> = ({ items }) => {
        return (
                <List>
                        {items.map((e) => {
                                return <ListItem key={e.id}>
                                        <QuizCard item={e} />
                                        </ListItem>
                        })
                                
                        }
                </List>
        )
}