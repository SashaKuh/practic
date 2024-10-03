import { MetaWrapper, Topic, Wrapper, Text, Button } from "./QuizCard.style";
import { HiCalendar } from "react-icons/hi";

interface QuizItem{
        // id: string;
        topic: string;
        level: string;
        time: number;
        questions: number;
}

interface QuizListProps{
        item: QuizItem
}

export const QuizCard: React.FC<QuizListProps> = ({ item }) => {
        return (
                <Wrapper level={item.level}>
                        <Topic>{item.topic}</Topic>
                        <MetaWrapper>
                                <Text color="red">
                                        <b>Level:</b> {item.level}
                                </Text>
                                <Text color='green'>
                                        <b>Time:</b> {item.time}
                                </Text>
                                <Text>
                                        <b>Questions:</b> {item.questions}
                                </Text>
                        </MetaWrapper>
                        <Button>
                                <HiCalendar size={20}/>
                        </Button>
                </Wrapper>
        )
}