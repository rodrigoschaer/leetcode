;;;; Description
;;
;; You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.
;;
;; Return the number of servers that communicate with any other server.
;;;;

;; Brute force:
;; Explore each line/column for each 1 and mark X when visited
(ns solution)

(def servers [[1 0 1] [0 1 0] [1 1 1]])

(defn line-has-servers?
  "Check if there is any server [1] in the line, excluding starting position"
  [line start]
  (some (fn [[index p]] (and (= p 1) (not= index start)))
        (map-indexed vector line)))

(defn count-servers
  "Count the number of servers that can communicate with any other server."
  [grid]
  (let [rows (count grid)
        cols (count (first grid))]
    (reduce (fn [count-servers [i j]]
              (if (zero? (get-in grid [i j]))
                count-servers
                (let [row (grid i)
                      column (map #(nth % j) grid)]
                  (+ count-servers (if (or (line-has-servers? row j) (line-has-servers? column i)) 1 0)))))
            0
            (for [i (range rows)
                  j (range cols)]
              [i j]))))

(count-servers servers)
