import slugify from "slugify";

export const slugit = (title: string) => slugify(title, { lower: true });
