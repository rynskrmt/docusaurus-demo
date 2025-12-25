import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '強力な検索機能',
    Svg: require('@site/static/img/cs-board-logo.svg').default,
    description: (
      <>
        Algoliaなどの検索エンジンと容易に統合でき、ユーザーが求める情報を瞬時に見つけ出すことができます。
        自己解決率の向上に貢献します。
      </>
    ),
  },
  {
    title: 'Markdownで簡単管理',
    Svg: require('@site/static/img/support-team.svg').default,
    description: (
      <>
        ドキュメントはMarkdown形式で記述するため、エンジニアだけでなく、
        サポート担当者やライターも簡単にコンテンツを更新・管理できます。
      </>
    ),
  },
  {
    title: '多言語対応とカスタマイズ',
    Svg: require('@site/static/img/cs-board-logo.svg').default,
    description: (
      <>
        標準で多言語対応（i18n）をサポート。
        また、Reactベースのため、独自のコンポーネントを組み込んで、
        自社のブランドに合ったヘルプセンターを構築できます。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
