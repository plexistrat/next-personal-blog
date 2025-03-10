import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
import styles from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: 'Γιατί υπάρχουν τόσα αδέσποτα; Οι κύριες αιτίες και πώς μπορούμε να βοηθήσουμε',
    image: 'https://darivianaki.gr/blog/wp-content/uploads/2022/07/adespota.jpg',
    date: 'Μάιος 18, 2024',
  },
  {
    title: 'Η σημασία της στείρωσης: Μύθοι και αλήθειες',
    image:
      'https://jenny.gr/sites/default/files/public/styles/article_1025x1025/public/imported/articles/2017-10/cat-636172-960-720.jpg?itok=rahaUnxt',
    date: 'Άυγουστος 27, 2024',
  },
  {
    title: 'Πώς να αναγνωρίσεις αν ένα αδέσποτο ζώο χρειάζεται βοήθεια',
    image: 'https://www.ygeiamou.gr/wp-content/uploads/2020/11/201118120944_dogsad.jpg',
    date: 'Σεπτέμβριος 9, 2024',
  },
  {
    title: 'Οι νόμοι για την προστασία των ζώων στην Ελλάδα: Τι πρέπει να ξέρεις',
    image: 'https://synyparxo.gr/wp-content/uploads/2022/08/nomothesia-sitisi-adespoton-img.jpg',
    date: 'Όκτωμβριος 12, 2024',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid className={styles.grid} cols={{ base: 1, sm: 2 }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
