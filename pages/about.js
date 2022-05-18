import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
	return (
		<Layout className={styles.about__main}>
			<section className={styles.about__page}>
				<h3>
					<FontAwesomeIcon icon={faCircleInfo} /> About Page:
				</h3>
				Design base on&nbsp;
				<Link href='https://dribbble.com/shots/14153121-ToDo-App-Dark-Theme' target>
					<a arget='_blank' rel='noreferrer'>
						Alex Arutuynov
					</a>
				</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic inventore ad laboriosam,
					maxime quaerat incidunt perferendis asperiores vel nemo nihil iure ea commodi voluptatem
					magni ipsum quam sequi quibusdam. Ducimus corporis architecto inventore impedit, optio
					odit iure sint! Fuga nulla quos, harum vel minima, illum eaque cum aliquid, voluptate quo
					earum! Quis eos itaque tenetur sapiente, quidem quas iste? Rem reprehenderit architecto
					ipsa reiciendis exercitationem quia! Corporis totam saepe quae quia iste! Explicabo vel ex
					sint tenetur animi omnis. Doloremque iusto dolores minima natus voluptatem aliquam nihil
					enim nulla! Odit aperiam debitis cum temporibus, repellat soluta mollitia id, quae
					architecto iste iure eveniet explicabo amet beatae praesentium maiores hic labore! Ex
					molestias mollitia perspiciatis eaque. Dolore tempore magni iusto? Dolore ratione,
					quisquam doloremque a neque obcaecati aspernatur ea minima natus. Omnis culpa similique
					labore aliquid totam commodi deleniti deserunt autem nisi illum rem aspernatur architecto,
					perferendis necessitatibus earum repellendus.
				</p>
			</section>
		</Layout>
	);
}
