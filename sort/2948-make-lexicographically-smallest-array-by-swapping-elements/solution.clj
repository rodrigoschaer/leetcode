(ns solution)

(defn lexicographically-smallest-array [nums limit]
  (let [sorted (->> nums
                    (map-indexed vector)     ; Pair values with their indices
                    (sort-by first))         ; Sort by value
        groups (loop [remaining sorted
                      last-val (:value (first sorted))
                      result []]
                 (if (empty? remaining)
                   result
                   (let [[current & rest] remaining
                         [val idx] current]
                     (if (> (- val last-val) limit)
                       (recur rest val (conj result []))
                       (recur rest val
                              (update-in result [(dec (count result))] conj idx))))))]
    (reduce (fn [result group]
              (let [sorted-vals (sort-by first group)] ; Sort indices within the group
                (reduce (fn [res [val idx]]
                          (assoc res idx val))
                        result
                        sorted-vals)))
            (vec (repeat (count nums) nil))
            groups)))

; (def nums [1,7,28,19,10])
; (def limit 3)
;
; (lexicographically-smallest-array nums limit)
