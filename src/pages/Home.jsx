import { useEffect, useMemo, useState } from "react";
import { getOscars2026 } from "../services/api";
import "../css/Home.css";

function Home() {
  const [data, setData] = useState(null);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOscars = async () => {
      try {
        const payload = await getOscars2026();
        setData(payload);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load Oscars nominees...");
      } finally {
        setLoading(false);
      }
    };

    loadOscars();
  }, []);

  const nominationById = useMemo(() => {
    const map = new Map();
    if (!data?.nominations) return map;
    for (const n of data.nominations) map.set(n.id, n);
    return map;
  }, [data]);

  const entityById = useMemo(() => {
    const map = new Map();
    if (!data?.entities) return map;
    for (const e of data.entities) map.set(e.id, e);
    return map;
  }, [data]);

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="home">
      <h1>Oscars 2026</h1>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading nominees...</div>
      ) : (
        <div className="accordion">
          {data?.categories?.map((cat) => {
            const isOpen = openCategoryId === cat.id;

            return (
              <section
                key={cat.id}
                className={`accordion-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleCategory(cat.id)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-title">{cat.name}</span>
                  <span className="accordion-indicator">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="accordion-panel">
                    <ul className="nominee-list">
                      {cat.nominationIds.map((nomId) => {
                        const nom = nominationById.get(nomId);

                        if (!nom) {
                          return (
                            <li key={nomId} className="nominee missing">
                              Missing nomination: <code>{nomId}</code>
                            </li>
                          );
                        }

                        const entity = entityById.get(nom.entityId);

                        return (
                          <li key={nom.id} className="nominee">
                            <div className="nominee-primary">
                              {nom.display?.primary ??
                                entity?.name ??
                                "Unknown"}
                            </div>
                            {nom.display?.secondary ? (
                              <div className="nominee-secondary">
                                {nom.display.secondary}
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
