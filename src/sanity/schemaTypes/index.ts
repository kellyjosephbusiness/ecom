import { type SchemaTypeDefinition } from "sanity";

// Documents
import { facility } from "./facility";
import { city } from "./city";
import { state } from "./state";
import { careType } from "./careType";
import { condition } from "./condition";
import { insurance } from "./insurance";
import { article } from "./article";

// Objects (reusable, embedded)
import { rating } from "./rating";
import { faq } from "./faq";
import { address } from "./address";

// Senior-living directory content models.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    facility,
    city,
    state,
    careType,
    condition,
    insurance,
    article,
    rating,
    faq,
    address,
  ],
};
