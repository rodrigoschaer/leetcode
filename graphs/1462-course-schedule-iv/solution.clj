(ns solution)

(defn dfs [current-course adj-list prereqs]
  (if-let [existing (get prereqs current-course)]
    existing
    (let [current-adjacency (get adj-list current-course [])
          current-prerequisites (reduce (fn [acc preq]
                                          (into acc (dfs preq adj-list prereqs))) #{} current-adjacency)]
      (assoc prereqs current-course (conj current-prerequisites current-course)))))

(defn check-if-prerequisite [num-courses prerequisites queries]
  (let [adj-list (reduce (fn [acc [pre course]]
                           (update acc course (fnil conj #{}) pre))
                         {}
                         prerequisites)
        prereqs (reduce (fn [acc i]
                          (dfs i adj-list acc))
                        {}
                        (range num-courses))]
    (map (fn [[pre course]]
           (contains? (prereqs course) pre))
         queries)))

(def nums 5)
(def pre [[3, 4],[2, 3],[1, 2],[0, 1]])
(def que [[0, 4], [4, 0],[1, 3],[3, 0]])
(check-if-prerequisite nums pre que)
