/* eslint-disable max-len */
import { Segment } from 'semantic-ui-react';
import './style.scss';

function Faq() {
  return (
    <Segment>
      <main>
        <h1 className="title">FAQ</h1>
        <section className="section">
          <div className="section-item">
            <h2 className="section-item-question">
              A quoi ça sert ?
            </h2>
            <p className="section-item-response">
              Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
            </p>
          </div>

          <div className="section-item">
            <h2 className="section-item-question">
              Comment faire une recherche ?
            </h2>
            <p className="section-item-response">
              Sur la page recherche, complétez le champ de recherche et valider la recherche.
            </p>
          </div>

          <div className="section-item">
            <h2 className="section-item-question">
              Puis-je chercher n'importe quel terme ?
            </h2>
            <p className="section-item-response">
              Oui, c'est fou.
            </p>
          </div>
        </section>
      </main>
    </Segment>
  );
}

export default Faq;
