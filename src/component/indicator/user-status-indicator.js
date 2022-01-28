const UserStatusIndicator = ({ status }) => {
  let className = "badge badge-danger";

  switch (status) {
    case "Verified":
      className = "badge badge-success";
      break;
    case "Pending":
      className = "badge badge-warning";
      break;
    case "Rejected":
      className = "badge badge-danger";
      break;
    default:
      className = "badge badge-success";
  }

  return <label className={className}>{status}</label>;
};

export default UserStatusIndicator;
