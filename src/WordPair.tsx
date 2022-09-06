import { Button, Card, Level, Text } from 'bumbag';

type Props = {
  wordPair: string;
}

function copyToClipboard(text: string) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text);
}

function WordPair(props: Props) {
  return (
    <Card variant="shadowed">
      <Level>
        <Text textAlign="center" fontSize="500">{props.wordPair }</Text>
        <Button variant="ghost" onClick={() => copyToClipboard(props.wordPair)}>Copy</Button>
      </Level>
    </Card>
  );
}

export default WordPair;
