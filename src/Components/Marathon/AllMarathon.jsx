import React, { useState, useMemo, Suspense } from 'react';
import AllCard from './AllCard';
import Spinner from '../Auth/Spinner';
import { createResource } from '../../CreateResource/createResource';

const AllMarathon = () => {
  const [sortOrder, setSortOrder] = useState('desc');

  const dataResource = useMemo(() => {
    const promise = fetch(`http://localhost:3000/marathons/list?sort=${sortOrder}`).then(res => res.json());
    return createResource(promise);
  }, [sortOrder]);

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-semibold">Sort by Date:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="select select-bordered"
        >
          <option value="desc">Newest to Oldest</option>
          <option value="asc">Oldest to Newest</option>
        </select>
      </div>

      <Suspense fallback={<Spinner />}>
        <AllCard dataResource={dataResource} />
      </Suspense>
    </div>
  );
};

export default AllMarathon;
