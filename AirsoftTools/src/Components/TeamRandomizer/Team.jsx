function Team({ team, teamNumber }) {
  return (
    <li key={teamNumber}>
      <h3>Team {teamNumber + 1}</h3>
      <ul>
        {team.map((member) => (
          <li key={member.id} value={member.name}>
            {member.name}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Team;
