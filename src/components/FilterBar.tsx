import useTodoStore from "@/store/todoStore";
import { Filter } from "@/types";

const FilterBar: React.FC = () => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);

  const filters: Filter[] = ["all", "active", "completed"];

  return (
    <div className="flex justify-center space-x-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-md ${
            filter === f ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          {f === "all" ? "전체" : f === "active" ? "미완료" : "완료"}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
