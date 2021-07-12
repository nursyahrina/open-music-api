exports.up = (pgm) => {
  pgm.createTable('playlistsongs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
  // add FK constraint to playlist_id
  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.playlist_id_playlists.id', 'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE');

  // add FK constraint to song_id
  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.song_id_songs.id', 'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // drop FK constraint of song_id from playlists
  pgm.dropConstraint('playlistsongs', 'fk_playlistsongs.song_id_songs.id');

  // drop FK constraint of playlist_id from playlists
  pgm.dropConstraint('playlistsongs', 'fk_playlistsongs.playlist_id_playlists.id');

  pgm.dropTable('playlistsongs');
};
