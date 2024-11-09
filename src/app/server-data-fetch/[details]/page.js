async function fetchUserdetails(currentUserId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/user/${currentUserId}`
    );
    const result = await apiResponse.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function UserDetails({ params }) {
  console.log(params);

  const userDetails = await fetchUserdetails(params.details);
  return (
    <div>
      <h1>This is user details page</h1>
      <p>
        {userDetails?.firstName} {userDetails?.lastName}
      </p>
      <p>{userDetails?.age}</p>
      <p>{userDetails?.email}</p>
      <p>{userDetails?.phone}</p>
      <p>{userDetails?.birthday}</p>
    </div>
  );
}
       