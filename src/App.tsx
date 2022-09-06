import { useState } from "react";
import { Box, Button, PageContent, PageWithHeader, Stack, TopNav } from 'bumbag';
import WordPair from './WordPair';

import adjectives from "./wordlists/adjectives.json";
import nouns from "./wordlists/nouns.json";

function randomWordPairs(): string[] {
  let pairs = [];
  for (var i = 0; i < 10; i++) {
    let idxA = Math.floor(Math.random() * adjectives.length);
    let idxN = Math.floor(Math.random() * nouns.length);
    let wordPair = [adjectives[idxA], nouns[idxN]].join(" ");
    pairs.push(wordPair);
  }
  return pairs;
}

function App() {
  const [pairs, setPairs] = useState<string[]>(randomWordPairs());

  return (
    <PageWithHeader
    header={
      <TopNav>
        <TopNav.Section>
          <TopNav.Item href="#" fontWeight="semibold">
            Adjective Noun
          </TopNav.Item>
        </TopNav.Section>
        <TopNav.Section marginRight="major-2">
          <TopNav.Item>
            <Button palette="primary" onClick={() => setPairs(randomWordPairs()) }>Refresh</Button>
          </TopNav.Item>
        </TopNav.Section>
      </TopNav>
    }
    border="default"
    >
    <Box>
      <PageContent>
        <Stack>
          {pairs.map((pair: string, idx: number) => <WordPair key={idx} wordPair={pair} />)}
        </Stack>
      </PageContent>
    </Box>
    </PageWithHeader>
  );
}

export default App;
