(ns solution)

(defn is-safe? [graph node safe]
  (if (contains? safe node)
    (safe node)
    (let [safe (assoc safe node false) ; Mark as unsafe initially
          adj-nodes (graph node)]
      (if (some (fn [adj] (not (is-safe? graph adj safe))) adj-nodes)
        false
        (assoc safe node true)))))

(defn eventual-safe-nodes [graph]
  (reduce (fn [ans i]
            (if (is-safe? graph i {}) (conj ans i) ans)) [] (range (count graph))))

(def graph [[1, 2] [2, 3] [5] [0] [5] [] []])

(eventual-safe-nodes graph)
