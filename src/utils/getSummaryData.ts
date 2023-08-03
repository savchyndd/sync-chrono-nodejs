import { NoteType } from "../type/NoteType.js";

const getSummaryData = (notesList: NoteType[]) => {
  const uniqueCategory = [
    ...new Set(notesList.map(({ category }: { category: string }) => category)),
  ];
  const result = uniqueCategory.map((item) => {
    const count = notesList.reduce(
      (
        acc: { totalArhived: number; totalActive: number },
        { category, arhived }
      ) => {
        if (category === item) {
          if (arhived) {
            acc.totalArhived += 1;
          } else {
            acc.totalActive += 1;
          }
        }
        return acc;
      },
      { totalActive: 0, totalArhived: 0 }
    );

    return {
      category: item,
      active: count.totalActive,
      arhived: count.totalArhived,
    };
  });

  return result;
};
export default getSummaryData;
